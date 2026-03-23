-- Waitlist submissions table for ServiZap landing page
create table if not exists public.waitlist_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  whatsapp text not null,
  service_type text not null,
  team_size text not null,
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.waitlist_submissions enable row level security;

-- Allow anonymous inserts (for the landing page form)
create policy "Allow anonymous inserts"
  on public.waitlist_submissions
  for insert
  to anon
  with check (true);

-- Deny reads from anon (only service_role can read)
create policy "Deny anonymous reads"
  on public.waitlist_submissions
  for select
  to anon
  using (false);
