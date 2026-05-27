import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema'

// 启动 db Clinet -> 用来在服务端操作数据库
export const db = drizzle(process.env.DATABASE_URL!, { schema });
