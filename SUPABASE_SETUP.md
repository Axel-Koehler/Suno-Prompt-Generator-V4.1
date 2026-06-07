# Supabase Setup

Diese Website kann Texte und neue Projekt-1-Datensaetze zentral ueber Supabase speichern.

1. Erstelle ein Supabase-Projekt.
2. Oeffne den SQL Editor und fuehre dieses SQL aus:

```sql
create table if not exists public.site_state (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.site_state enable row level security;

drop policy if exists "public read site state" on public.site_state;
create policy "public read site state"
on public.site_state
for select
to anon
using (true);

drop policy if exists "public write site state" on public.site_state;
create policy "public write site state"
on public.site_state
for insert
to anon
with check (true);

drop policy if exists "public update site state" on public.site_state;
create policy "public update site state"
on public.site_state
for update
to anon
using (true)
with check (true);
```

3. Kopiere in Supabase unter Project Settings > API:
   - Project URL
   - anon public key

4. Trage beides in `assets/remote-config.js` ein und setze `enabled: true`.

Wichtig: Diese einfache Variante ist fuer statische GitHub-Pages-Seiten gedacht. Der anon public key ist im Browser sichtbar. Durch die Editor-Anmeldung ist die Bedienung geschuetzt, aber ein technisch versierter Besucher koennte Schreibzugriffe nachbauen. Fuer maximale Sicherheit waere ein Backend oder eine Supabase Edge Function mit Server-Secret sinnvoll.
