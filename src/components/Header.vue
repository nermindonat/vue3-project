<template>
  <div
    class="h-16 flex justify-between items-center px-12 text-white bg-[#0a0c0f] fixed w-full top-0 z-50"
  >
    <h2 class="text-xl font-bold">MNS YAPI</h2>
    <nav id="nav" class="font-semibold space-x-6">
      <router-link to="/">Anasayfa</router-link>
      <router-link to="/hakkimizda">Hakkımızda</router-link>
      <router-link to="/hizmetlerimiz">Hizmetlerimiz</router-link>
      <router-link to="/iletisim">İletişim</router-link>
    </nav>
  </div>
  <div class="mt-16">
    <router-view></router-view>
  </div>
</template>
