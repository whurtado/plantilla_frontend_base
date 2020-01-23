const browserWindow = window || {};
const browserWindowEnv = browserWindow['__env'] || {};

export const constants = {
    config: {
        adverstismentApi: 'template/cms-spaces?&ad=0',
        login: 'api/auth/login',
        editarUsuario: 'api/auth/usuarios',
        cargarRolesUsuario: 'api/auth/usuarios/create',
        crearUsuario: 'api/auth/usuarios/registrar',
        listarUsuarios: 'api/auth/usuarios',
        mostrarUsuario: 'api/auth/usuarios/edit',
        actualizarUsuario: 'api/auth/usuarios/actualizar',
        actualizarRolesUsuario:'api/auth/usuariosRoles/actualizar',
        actualizarPermisosUsuario:'api/auth/usuariosPermisos/actualizar',

        listarRoles: 'api/auth/roles',
        cargarPermisos: 'api/auth/roles/create',
        crearRol: 'api/auth/roles/registrar',
        mostrarRol:'api/auth/roles/edit',
        actualizarRol: 'api/auth/roles/actualizar',







    }
};
