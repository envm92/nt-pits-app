const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
	logger.info("Hello logs!", { structuredData: true });
	response.send("Hello from Firebase!");
});

import OpenAI from "openai";
import { z } from "zod";

const openai = new OpenAI({
});

export const BareNecessitiesSchema = z.object({
	sleep: z.enum(["none", "some", "exhasted"]),
	hunger: z.enum(["none", "some", "high"]),
	thirst: z.enum(["none", "some", "high"]),
	pain: z.enum(["none", "mild", "strong"]),
	temperature: z.enum(["cold", "ok", "hot"]),
	energy: z.enum(["high", "medium", "low"]),
	overstimulation: z.enum(["no", "maybe", "yes"]),
});

export const SensoryInternalSchema = z.object({
	body: z.enum(["head","chest", "stomach", "limbs", "whole body", "not sure"]),
	senation: z.enum([" tight","heavy","pressure","empty","buzzing","numb","warm","cold","tired", "not sure"]),
	intensity: z.enum(["low", "medium", "high", "not sure"])
});

export const SensoryExternalSchema = z.object({
	sound: z.enum(["none","noticeable","overwhelming", "not sure"]),
	light: z.enum(["comfortable ","noticeable ","unpleasant", "not sure"]),
	touch: z.enum(["ok", "irritating", "not sure"]),
	visual: z.enum(["low", "medium", "high", "not sure"]),
});

export const EmotionsSchema = z.object({
  mood: z.enum(["happy","suprised","bad","fearful","angry","disgusted", "sad"]),
  detail: z.string(),
  intensity: z.number().min(0).max(10),
  thoughts: z.string()
});

export const StepInsightSchema = z.object({
  action: z.enum(["nextStep","suggestMessage","suggestAction"]),
  message: z.string(),
  suggestions: z.array(z.string()).optional()
});

exports.createThread = onCall((request, response) => {

});