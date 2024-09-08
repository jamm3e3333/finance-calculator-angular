import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

(async () => {
  const module = await platformBrowserDynamic().bootstrapModule(AppModule)
})()
