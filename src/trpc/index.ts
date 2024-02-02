import { publicProdecure, router } from "./trpc";

export const appRouter = router({
    anyApiRoute: publicProdecure.query(() => {
        return 'Hey'
    })
})

export type AppRouter = typeof appRouter