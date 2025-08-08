# Push this project to GitHub (step by step)

There are three simple ways. Pick the one that suits you.

## Option A — One‑click from v0 (fastest)

- In the top‑right of this v0 Block view, select the GitHub icon.
- Authorise GitHub if prompted and choose:
  - Owner (your user/org)
  - Repository name
  - Visibility (Private or Public)
- Confirm. v0 will create the repo and push the current code.

Tip: After this, open your new repo on github.com and enable branch protection if needed.

## Option B — Git CLI (universal)

1) Initialise a repo locally
- Open your terminal at the project root and run:

\`\`\`bash
git init
git add -A
git commit -m "Initial commit: Focus Insurance site"
\`\`\`

2) Set the default branch to main

\`\`\`bash
git branch -M main
\`\`\`

3) Create an empty repository on GitHub
- Go to https://github.com/new and create a repository (no README/LICENCE yet).
- Copy the repository URL (HTTPS is simplest), for example:
  - HTTPS: https://github.com/your-org/focus-insurance.git
  - SSH: git@github.com:your-org/focus-insurance.git

4) Add the remote and push

\`\`\`bash
# For HTTPS:
git remote add origin https://github.com/your-org/focus-insurance.git

# For SSH (if you prefer SSH keys):
# git remote add origin git@github.com:your-org/focus-insurance.git

git push -u origin main
\`\`\`

5) Push future changes

\`\`\`bash
# Work as usual, then:
git add -A
git commit -m "Describe your change"
git push
\`\`\`

6) Working with feature branches (recommended)

\`\`\`bash
git checkout -b feature/faster-logos
# make edits...
git add -A
git commit -m "Speed up partners logos to 10s"
git push -u origin feature/faster-logos
\`\`\`

Open a Pull Request on GitHub to merge into main when ready.

## Option C — GitHub Desktop (no terminal)

- File → New repository (or Add local repository).
- Commit your files.
- Publish repository to GitHub.
- Use “Create Branch” for changes and “Create Pull Request” when done.

---

## Good to know

- A proper .gitignore is included at the project root so build artefacts, node_modules, .env, and .vercel are not committed.
- Large files over 100 MB are blocked by GitHub; use Git LFS if you truly need to store large binaries.
- If you accidentally added secrets, revoke and rotate them, then force‑remove from history (e.g., `git filter-repo` or GitHub’s secret scanning instructions).

## Next: connect the repo to Vercel (recommended)

- Import the repo into Vercel (New Project → Import) to get:
  - Preview deployments for every push and pull request. [^1][^2][^3][^4]
  - Production deployments when you merge to the production branch (commonly `main`). [^1][^2]
- Set your Environment Variables in Vercel (both Preview and Production).
- Every new commit will automatically build and deploy. [^1][^2][^4]
