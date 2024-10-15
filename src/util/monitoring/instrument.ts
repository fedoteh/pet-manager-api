import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";


Sentry.init({
  dsn: "https://ff08a96767aba7fc0015fdfa4053a642@o4508106432315392.ingest.us.sentry.io/4508106434281472",
  environment: process.env.NODE_ENV,
  integrations: [
    nodeProfilingIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions

  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});