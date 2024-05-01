import { createRealmContext } from "@realm/react";
import { BSON, Realm, ObjectSchema } from "realm";

// Define your object model
export class Task extends Realm.Object<Task> {
  _id: BSON.ObjectId = new BSON.ObjectID();
  description!: string;
  isComplete: boolean = false;
  createdAt: Date = new Date();
  user_id!: string;

  static primaryKey = "_id";
}
