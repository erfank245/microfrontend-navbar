<template>
  <div>
    <nav>
      <a
        class="logo-link"
        href="/"
      >
        <img
          class="logo"
          alt="logo"
          src="https://graphicallyapp.ir/MainLogo.png"
        />
        <div class="product-name">میکرو-فرانت اند</div>
      </a>
      <a
        class="nav-link"
        active-class="active-nav-link"
        href="/link-1"
      >
        لینک ۱
      </a>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  props: {
    links: Array,
  },
};
</script>

<style scoped>
nav {
  direction: rtl;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 80px;
  padding: 0 calc(calc(100vw - 700px) / 2);
  background-color: white;
  transition: left 0.2s ease-in-out;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 0.2rem 1rem #00000040;
}
.navbar-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.logo-link .logo {
  height: 60px;
}
.logo-link .product-name {
  color: black;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
}
.nav-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
}
.active-nav-link {
  font-weight: 600;
}

</style>