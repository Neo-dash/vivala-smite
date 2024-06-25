

import { action, mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

import { api } from "./_generated/api";




import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});





export const generateUploadUrl = mutation(async (ctx) => {
    return await ctx.storage.generateUploadUrl();
});

export const getDocuments = query({
    async handler(ctx) {

        const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier

        if (!userId) {
            return [];

        }

        return await ctx.db.query('documents')
            .withIndex('by_tokenIdentifier', (q) => q.eq('tokenIdentifier',
                userId
            )).collect()
    },
})


export const getDocument = query({

    args: {
        documentId: v.id('documents'),

    },

    async handler(ctx, args) {

        const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier

        if (!userId) {
            return null;

        }
        const document = await ctx.db.get(args.documentId)

        if (!document) {
            return null;
        }

        if (document.tokenIdentifier != userId) {
            //throw new ConvexError('Not Authorized')
            return null;
        }

        return {
            ...document, documentUrl: await ctx.storage.getUrl(document.fileId),
        };

    },
})

export const createDocument = mutation({
    args: {
        title: v.string(),
        fileId: v.id("_storage"),
    },
    async handler(ctx, args) {

        const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier;

        console.log(userId)

        if (!userId) {
            throw new ConvexError('Not Authenticated')
        }
        await ctx.db.insert('documents', {
            title: args.title,
            tokenIdentifier: userId,
            fileId: args.fileId,
        })
    },



})

export const askQuestion = action({
    args: {
        question: v.string(),
        documentId: v.id("documents"),

    },

    async handler(ctx, args) {

        const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier;

        console.log(userId)

        if (!userId) {
            throw new ConvexError('Not Authenticated')
        }
        const document = await ctx.runQuery(api.documents.getDocument, {
            documentId: args.documentId,
        })
    
        if (!document) {
            throw new ConvexError("document not found");
        }

        const file = await ctx.storage.get(document.fileId);

        if (!file) {
            throw new ConvexError("file not found");
        }

        const chatCompletion = await openai.chat.completions.create({
            messages: [{role: "user", content: "say: this a test"}],
            model: "gpt-3.5-turbo",
        });

        return chatCompletion;

    },


});