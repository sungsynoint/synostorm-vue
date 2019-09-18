<template>
  <div class="left-side-menu active">
    <div
      class="slimScrollDiv in"
      style="position: relative; overflow: hidden; width: auto; height: 576px;"
    >
      <div class="slimscroll-menu active" style="overflow: hidden; width: auto; height: 576px;">
        <span href="/en/" class="logo text-center active">
          <span class="logo-lg">
            <img src="/images/logo.png" alt height="24" />
          </span>
          <span class="logo-sm">
            <img src="/images/logo_sm.png" alt height="16" />
          </span>
        </span>
        <ul class="metismenu side-nav in">
          <li class="side-nav-item active">
            <span href="/en/" class="side-nav-link active">
              <i class="dripicons-home"></i>
              <span>Dashboard</span>
            </span>
          </li>
          <li class="side-nav-item">
            <span href="/en/projects" class="side-nav-link">
              <i class="dripicons-briefcase"></i>
              <span>Projects</span>
            </span>
          </li>
          <li class="side-nav-item">
            <span href="/en/audience-campaigns" class="side-nav-link">
              <i class="dripicons-web"></i>
              <span>Audience</span>
            </span>
          </li>
          <li class="side-nav-item">
            <span href="/en/identity-campaigns" class="side-nav-link">
              <i class="dripicons-user-id"></i>
              <span>Identities</span>
            </span>
          </li>
          <li class="side-nav-item">
            <span href class="side-nav-link">
              <i class="dripicons-message"></i>
              <span>Answers</span>
              <span class="menu-arrow"></span>
            </span>
            <ul class="side-nav-second-level collapse" aria-expanded="false">
              <li>
                <a href="/en/omnibus-orders/about">About</a>
              </li>
              <li>
                <a href="/en/omnibus-balance">Balance</a>
              </li>
              <li>
                <a href="/en/omnibus-orders/list">Orders</a>
              </li>
            </ul>
          </li>
          <li class="side-nav-item">
            <a href="/en/market/evaluation" class="side-nav-link">
              <i class="dripicons-graph-line"></i>
              <span>Market Evaluation</span>
            </a>
          </li>
          <li class="side-nav-item">
            <a href="/en/panels" class="side-nav-link">
              <i class="dripicons-view-thumb"></i>
              <span>Panels</span>
            </a>
          </li>
          <li class="side-nav-item">
            <span href class="side-nav-link">
              <i class="dripicons-gear mr-1"></i>
              <span>Settings</span>
              <span class="menu-arrow"></span>
            </span>
            <ul class="side-nav-second-level collapse" aria-expanded="false">
              <li>
                <span href="/en/employees">Employees</span>
              </li>
              <li>
                <span href="/en/users">Users</span>
              </li>
            </ul>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div
        class="slimScrollBar"
        style="background: rgb(158, 165, 171); width: 8px; position: absolute; top: -191.4px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 576px;"
      ></div>
      <div
        class="slimScrollRail"
        style="width: 8px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"
      ></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "LeftMenu"
};
</script>