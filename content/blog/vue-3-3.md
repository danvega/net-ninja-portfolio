---
title: Announcing Vue 3.3
description: This release is focused on developer experience improvements and bug fixes.
date: 2023-05-24
cover: karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg
tags:
  - vue
---

# Announcing Vue 3.3

Today we're excited to announce the release of Vue 3.3 "Rurouni Kenshin"!

This release is focused on developer experience improvements - in particular, SFC <script setup> usage with TypeScript. Together with the 1.6 release of Vue Language Tools (previously known as Volar), we have resolved many long-standing pain points when using Vue with TypeScript.

This post provides an overview of the highlighted features in 3.3. For the full list of changes, please consult the full changelog on GitHub.

## `<script setup>` + TypeScript DX Improvements

### Imported and Complex Types Support in Macros

Previously, types used in the type parameter position of defineProps and defineEmits were limited to local types, and only supported type literals and interfaces. This is because Vue needs to be able to analyze the properties on the props interface in order to generate corresponding runtime options.

This limitation is now resolved in 3.3. The compiler can now resolve imported types, and supports a limited set of complex types:

```vue
<script setup lang="ts">
import type { Props } from "./foo";

// imported + intersection type
defineProps<Props & { extraProp?: string }>();
</script>
```

Do note that complex types support is AST-based and therefore not 100% comprehensive. Some complex types that require actual type analysis, e.g. conditional types, are not supported. You can use conditional types for the type of a single prop, but not the entire props object.
