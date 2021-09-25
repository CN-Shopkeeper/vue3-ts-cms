export const projectDir = `
|-- babel.config.js
|-- commitlint.config.js
|-- package.json
|-- package-lock.json
|-- public
|   |-- favicon.ico
|   |-- index.html
|-- README.md
|-- src
|   |-- App.vue
|   |-- assets
|   |   |-- css
|   |   |   |-- base.less
|   |   |   |-- index.less
|   |   |-- img
|   |       |-- login-bg.svg
|   |       |-- logo.svg
|   |-- base-ui
|   |   |-- breadcrumb
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- breadcrumb.vue
|   |   |   |-- types
|   |   |       |-- index.ts
|   |   |-- card
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- card.vue
|   |   |-- echart
|   |   |   |-- data
|   |   |   |   |-- china.json
|   |   |   |-- hooks
|   |   |   |   |-- useEchart.ts
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- base-echart.vue
|   |   |-- form
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- form.vue
|   |   |   |-- types
|   |   |       |-- index.ts
|   |   |-- table
|   |       |-- index.ts
|   |       |-- src
|   |           |-- table.vue
|   |-- components
|   |   |-- nav-header
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- nav-header.vue
|   |   |       |-- user-info.vue
|   |   |-- nav-menu
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- nav-menu.vue
|   |   |-- page-content
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- page-content.vue
|   |   |-- page-echarts
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- bar-echart.vue
|   |   |   |   |-- line-echart.vue
|   |   |   |   |-- map-echart.vue
|   |   |   |   |-- pie-echart.vue
|   |   |   |   |-- rose-echart.vue
|   |   |   |-- types
|   |   |   |   |-- index.ts
|   |   |   |-- utils
|   |   |       |-- convert-data.ts
|   |   |       |-- coordinata-data.ts
|   |   |-- page-modal
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |       |-- page-modal.vue
|   |   |-- page-search
|   |       |-- index.ts
|   |       |-- src
|   |           |-- page-search.vue
|   |-- global
|   |   |-- index.ts
|   |   |-- register-element.ts
|   |   |-- register-properties.ts
|   |-- hooks
|   |   |-- usePageModal.ts
|   |   |-- usePageSearch.ts
|   |   |-- usePermission.ts
|   |-- main.ts
|   |-- router
|   |   |-- index.ts
|   |   |-- main
|   |       |-- analysis
|   |       |   |-- dashboard
|   |       |   |   |-- dashboard.ts
|   |       |   |-- overview
|   |       |       |-- overview.ts
|   |       |-- product
|   |       |   |-- category
|   |       |   |   |-- category.ts
|   |       |   |-- goods
|   |       |       |-- goods.ts
|   |       |-- story
|   |       |   |-- chat
|   |       |   |   |-- chat.ts
|   |       |   |-- list
|   |       |       |-- list.ts
|   |       |-- system
|   |           |-- department
|   |           |   |-- department.ts
|   |           |-- menu
|   |           |   |-- menu.ts
|   |           |-- role
|   |           |   |-- role.ts
|   |           |-- user
|   |               |-- user.ts
|   |-- service
|   |   |-- axios_demo.ts
|   |   |-- index.ts
|   |   |-- login
|   |   |   |-- login.ts
|   |   |   |-- type.ts
|   |   |-- main
|   |   |   |-- analysis
|   |   |   |   |-- dashboard.ts
|   |   |   |-- system
|   |   |       |-- system.ts
|   |   |       |-- type.ts
|   |   |-- request
|   |   |   |-- config.ts
|   |   |   |-- index.ts
|   |   |   |-- type.ts
|   |   |-- type.ts
|   |-- shims-vue.d.ts
|   |-- store
|   |   |-- index.ts
|   |   |-- login
|   |   |   |-- login.ts
|   |   |   |-- type.ts
|   |   |-- main
|   |   |   |-- analysis
|   |   |   |   |-- dashboard.ts
|   |   |   |   |-- types.ts
|   |   |   |-- system
|   |   |       |-- system.ts
|   |   |       |-- type.ts
|   |   |-- type.ts
|   |-- utils
|   |   |-- cache.ts
|   |   |-- date-format.ts
|   |   |-- map-menus.ts
|   |-- views
|       |-- login
|       |   |-- config
|       |   |   |-- account-config.ts
|       |   |   |-- phone-config.ts
|       |   |-- cpns
|       |   |   |-- login-account.vue
|       |   |   |-- login-panel.vue
|       |   |   |-- login-phone.vue
|       |   |-- login.vue
|       |-- main
|       |   |-- analysis
|       |   |   |-- dashboard
|       |   |   |   |-- dashboard.vue
|       |   |   |-- overview
|       |   |       |-- overview.vue
|       |   |-- main.vue
|       |   |-- product
|       |   |   |-- category
|       |   |   |   |-- category.vue
|       |   |   |-- goods
|       |   |       |-- config
|       |   |       |   |-- content.config.ts
|       |   |       |-- goods.vue
|       |   |-- story
|       |   |   |-- chat
|       |   |   |   |-- chat.vue
|       |   |   |-- list
|       |   |       |-- list.vue
|       |   |-- system
|       |       |-- department
|       |       |   |-- department.vue
|       |       |-- menu
|       |       |   |-- config
|       |       |   |   |-- content.config.ts
|       |       |   |-- menu.vue
|       |       |-- role
|       |       |   |-- config
|       |       |   |   |-- content.config.ts
|       |       |   |   |-- modal.config.ts
|       |       |   |   |-- search.config.ts
|       |       |   |-- role.vue
|       |       |-- user
|       |           |-- config
|       |           |   |-- content.config.ts
|       |           |   |-- modal.config.ts
|       |           |   |-- search.config.ts
|       |           |-- user.vue
|       |-- not-found
|           |-- not-found.vue
|-- tsconfig.json
|-- vue.config.js
`;
