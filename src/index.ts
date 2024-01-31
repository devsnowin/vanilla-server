import "dotenv/config";
import server from "./server";

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
