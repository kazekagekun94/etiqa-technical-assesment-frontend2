import { Routes, RouterModule } from "@angular/router";
// import {user}


const routes: Routes = [
    {
        path: "users",
        loadChildren: () => import("./users/users.module").then((m) => m.UsersModule),
    },

    // otherwise redirect to home
    // { path: "**", redirectTo: "" }
];

export const appRoutingModule = RouterModule.forRoot(routes);
