import { authkitMiddleware } from '@workos-inc/authkit-nextjs';

export default authkitMiddleware({ debug: true });

// Match against pages that require auth, e.g.:
export const config = { matcher: ['/','/api','/app'] };