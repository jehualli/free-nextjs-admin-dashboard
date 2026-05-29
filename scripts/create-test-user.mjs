/**
 * Creates a test user in Supabase.
 * Run once after configuring the production redirect URL in the Supabase dashboard.
 *
 * Usage:
 *   node scripts/create-test-user.mjs
 */

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("Missing env vars. Run with: node --env-file=.env.local scripts/create-test-user.mjs");
  process.exit(1);
}

const TEST_EMAIL    = "demo@novaanalytics.io";
const TEST_PASSWORD = "NovaDemo2026!";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log(`Creating test user: ${TEST_EMAIL}`);

const { data, error } = await supabase.auth.signUp({
  email: TEST_EMAIL,
  password: TEST_PASSWORD,
  options: {
    data: { first_name: "Demo", last_name: "User" },
  },
});

if (error) {
  console.error("Error:", error.message);
  process.exit(1);
}

if (data.user?.identities?.length === 0) {
  console.log("User already exists.");
} else if (data.session) {
  console.log("✅ User created and confirmed automatically.");
} else {
  console.log("✅ User created. A confirmation email was sent to:", TEST_EMAIL);
  console.log("   Click the link in the email to activate the account.");
}

console.log("\nTest credentials:");
console.log("  Email:   ", TEST_EMAIL);
console.log("  Password:", TEST_PASSWORD);
