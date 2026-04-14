const mongoose = require("mongoose")

const auditSchema = new mongoose.Schema({
 businessName: String,
 loanAmount: Number,
 score: Number,
 decision: String,
 reasons: [String],
 createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("AuditLog", auditSchema)