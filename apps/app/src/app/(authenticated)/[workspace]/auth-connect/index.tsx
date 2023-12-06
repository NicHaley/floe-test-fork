"use client";

import { Button, Modal, Input } from "@floe/ui";
import type { Prisma } from "@floe/db";
import Link from "next/link";
import { useState, useTransition } from "react";
import { setGitlabToken } from "./actions";

interface AuthConnectProps {
  workspace: Prisma.WorkspaceGetPayload<{
    include: {
      encrytpedKeys: {
        select: {
          name: true;
          slug: true;
          createdAt: true;
        };
      };
    };
  }>;
}

/**
 * Component to allow a user to connect their org to either a GitHub or GitLab
 */
export function AuthConnect({ workspace }: AuthConnectProps) {
  const [open, setOpen] = useState(false);
  const [_, startTransition] = useTransition();

  const handleFormSubmit = (formData: FormData) => {
    try {
      startTransition(async () => {
        await setGitlabToken(workspace.id, formData);
        setOpen(false);
      });
    } catch (e) {
      // TODO: Add toast alert to handle error
      console.error(e);
    }
  };

  return (
    <div>
      <Link
        href={`https://github.com/apps/floe-app/installations/new?state=${workspace.slug}`}
      >
        <Button>Connect to GitHub</Button>
      </Link>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Connect to GitLab
      </Button>
      <Modal.Root open={open} setOpen={setOpen}>
        <form action={handleFormSubmit}>
          <Modal.Body title="Connect to GitLab">
            <Input
              label="API Access Token"
              name="token"
              subtext="You can create access tokens in your GitLab dashboard."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Connect</Button>
          </Modal.Footer>
        </form>
      </Modal.Root>
    </div>
  );
}