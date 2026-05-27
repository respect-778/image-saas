import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

// schema -> 数据库表结构说明书

// 创建 users 表
export const Users = pgTable("users", {
  id: serial("user_id").primaryKey(),
  name: varchar('name', { length: 50 }).notNull()
})