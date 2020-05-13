import { connect } from "mongoose";
import { DB_HOST, DB_PORT, DB_DATABASE } from "./base.config";

export default () => {
  const connection = `${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
  console.log(`Connect to database ${connection}`);
  connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
