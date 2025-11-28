"use client";
import { Button } from "amvasdev-ui";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ButtonLink from "@/components/ButtonLink";
import GradientText from "@/components/GradientText";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-content bg-gradient-to-br from-base-100 to-base-200 flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Icon */}
          <AlertCircle className="size-16 mx-auto text-primary/60" />

          {/* 404 Title */}
          <GradientText as="h1" size="6xl" className="mb-6">
            404
          </GradientText>

          {/* Error Message */}
          <h2 className="text-2xl md:text-3xl text-base-content/80 mb-4 font-light">
            Page Not Found
          </h2>

          <p className="text-lg text-base-content/70 mb-12 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <ButtonLink
              variant="primary"
              size="lg"
              href="/"
              className="flex items-center gap-2"
              aria-label="Navigate to home page"
            >
              <Home size={20} />
              Go Home
            </ButtonLink>
            <Button
              id="not-found-go-back"
              variant="ghost"
              size="lg"
              onClick={() => router.back()}
              className="flex items-center gap-2"
              aria-label="Go back to previous page"
            >
              <ArrowLeft size={20} />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
