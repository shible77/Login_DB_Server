"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.users = (0, mysql_core_1.mysqlTable)("users", {
    id: (0, mysql_core_1.serial)("id").primaryKey(),
    username: (0, mysql_core_1.varchar)("username", { length: 256 }).notNull().unique(),
    password: (0, mysql_core_1.varchar)("password", { length: 256 }).notNull(),
});
