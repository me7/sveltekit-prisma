// singleton db instance
// see https://www.prisma.io/docs/guides/performance-and-optimization/connection-management#prismaclient-in-long-running-applications

import { PrismaClient } from '@prisma/client'
let db = new PrismaClient()
export default db