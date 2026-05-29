import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | Nova Analytics",
  description: "This is Next.js Signin Page Nova Analytics",
};

export default function SignIn() {
  return <SignInForm />;
}
