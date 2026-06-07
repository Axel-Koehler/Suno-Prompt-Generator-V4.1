# Supabase Edge Function Setup

Diese Variante speichert zentral ueber eine Supabase Edge Function statt ueber die direkte Tabellen-API.

Die Webseite ruft diese URL auf:

```text
https://rglpcsnkctqukbvkwaeo.supabase.co/functions/v1/site-state
```

## Deployment mit Supabase CLI

1. Supabase CLI installieren und anmelden.
2. Im Projektordner ausfuehren:

```bash
supabase functions deploy site-state --project-ref rglpcsnkctqukbvkwaeo
```

3. In Supabase unter Project Settings > API den `service_role` Key kopieren.
4. Als Function Secret setzen:

```bash
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=DEIN_SERVICE_ROLE_KEY --project-ref rglpcsnkctqukbvkwaeo
```

`SUPABASE_URL` ist in Supabase Edge Functions normalerweise automatisch vorhanden. Falls nicht, ebenfalls setzen:

```bash
supabase secrets set SUPABASE_URL=https://rglpcsnkctqukbvkwaeo.supabase.co --project-ref rglpcsnkctqukbvkwaeo
```

Danach Online-Seite neu laden und im Editor speichern. Die Meldung sollte dann `Zentral gespeichert.` anzeigen.

Hinweis: Der `service_role` Key darf niemals in `assets/remote-config.js` oder in den Browser-Code eingetragen werden. Er gehoert nur als Secret in die Edge Function.
