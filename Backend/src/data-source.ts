import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db.ygnfxgexfxtcgbpfadxk.supabase.co",
  port: 5432,
  username: "postgres",
  password: "deEw8vHAVb#$JZb",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
