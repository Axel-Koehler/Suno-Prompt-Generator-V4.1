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

3. Danach Online-Seite neu laden und im Editor speichern.

Die Meldung sollte dann `Zentral gespeichert.` anzeigen.

Hinweis: `SUPABASE_URL` und `SUPABASE_SERVICE_ROLE_KEY` sind in Supabase Edge Functions reservierte Umgebungsvariablen und werden automatisch bereitgestellt. Sie muessen nicht manuell als Secrets gesetzt werden. Der `service_role` Key darf niemals in `assets/remote-config.js` oder in den Browser-Code eingetragen werden.
