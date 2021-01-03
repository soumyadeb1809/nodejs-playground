import app, { start } from './App';
import { port } from './config/Config';

app.listen(port, async () => {
    await  start();
    console.log(`Server running on port : ${port}`);
})
.on('error', (e) => Logger.error(e));