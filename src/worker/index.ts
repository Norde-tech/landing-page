import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.post("/api/contact", async (c) => {
  const body = await c.req.json<{
    name: string;
    email: string;
    message: string;
  }>();

  // TODO: integrate with email service, database, or webhook
  console.log("Contact form submission:", body);

  return c.json({ success: true });
});

export default app;
