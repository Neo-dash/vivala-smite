import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({
    fileId: v.id("_storage"),
    title: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_tokenIdentifier", ["tokenIdentifier"]),

  chats: defineTable({
    documentId: v.id("documents"),
    tokenIdentifier: v.string(),
    isHuman: v.boolean(),
    text: v.string(),
  }).index("by_documentId_tokenIdentifier", ["documentId","tokenIdentifier"]),

});


//test