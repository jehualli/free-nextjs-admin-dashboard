import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sign In | Nova Analytics",
  description: "Sign in to your Nova Analytics account.",
};

export default function SignIn() {
  return (
    <Suspense>
      <SignInForm />
    </Suspense>
  );
}
