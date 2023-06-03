import { Router } from "express";

// routes
import { sessionsRouter } from "@modules/users/infra/http/routes/sessions.routes";
import { usersRouter } from "@modules/users/infra/http/routes/users.route";
import { emailVerifyRouter } from "@modules/users/infra/http/routes/email-verify.routes";
import { confirmEmailRouter } from "@modules/users/infra/http/routes/confirm-email.routes";
import { forgotPasswordRouter } from "@modules/users/infra/http/routes/forgot-password.routes";
import { resetPasswordRouter } from "@modules/users/infra/http/routes/reset-password.routes";
import { permissionsRouter } from "@modules/permissions/infra/http/routes/permissions.route";
import { rolesRouter } from "@modules/roles/infra/http/routes/roles.route";
import { teachingUnitsRouter } from "@modules/teachingUnits/infra/http/routes/teachingUnits.route";
import { coursesRouter } from "@modules/courses/infra/http/routes/courses.route";
import { disciplinesRouter } from "@modules/disciplines/infra/http/routes/disciplines.route";
import { studentsRouter } from "@modules/students/infra/http/routes/students.route";

const routes = Router();

// sessions
routes.use("/sessions", sessionsRouter);

// users
routes.use("/users", usersRouter);

routes.use("/verify", emailVerifyRouter);
routes.use("/confirm", confirmEmailRouter);
routes.use("/forgot-password", forgotPasswordRouter);
routes.use("/reset", resetPasswordRouter);

// permissions
routes.use("/permissions", permissionsRouter);

// permissions
routes.use("/roles", rolesRouter);

// teaching units
routes.use("/teaching-units", teachingUnitsRouter);

// courses
routes.use("/courses", coursesRouter);

// disciplines
routes.use("/disciplines", disciplinesRouter);

// students
routes.use("/students", studentsRouter);

export { routes };
