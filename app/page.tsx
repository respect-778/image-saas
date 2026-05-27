import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { db } from "@/server/db/db";
import { Users } from "@/server/db/schema";
import { eq } from 'drizzle-orm'

export default async function Home() {

  // 这是使用 drizzle-orm 查询
  // const users = await db.query.Users.findMany()

  const users = await db.select().from(Users).where(eq(Users.name, 'Elio'))

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="w-full max-w-md flex flex-col gap-4" action="">
        <h1 className="text-center text-2xl font-bold">Create APP</h1>
        <Input name="name" placeholder="APP Name" />
        <Textarea name="description" placeholder="Description" />
        <Button type="submit">Submit</Button>
      </form>

      {
        users.map(item => {
          return (
            <div key={item.id}>{item.name}</div>
          )
        })
      }
    </div>
  );
}
