<template>
  <q-layout class="bg-grey-1">
    <q-header
      elevated
      class="text-white"
      style="background: #24292e"
      height-hint="61.59"
    >
      <q-toolbar class="q-py-sm q-px-md">
        <div v-if="$q.screen.gt.sm">
          <h5>Welcome to Babylon App</h5>
        </div>

        <q-space />

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn dense flat no-wrap>
            <div>
              <p>About App</p>
              <q-icon name="arrow_drop_down" size="36px" />
            </div>

            <q-menu auto-close>
              <q-list dense>
                <q-item>
                  <q-item-section
                    >You can choose the shape you are interested
                    in</q-item-section
                  >
                </q-item>
                <q-separator />
                <q-item>
                  <q-item-section
                    >You can move, rotate or scale the shape</q-item-section
                  >
                </q-item>
                <q-separator />
                <q-item>
                  <q-item-section
                    >If you want to change the color of the shape, just click on
                    it</q-item-section
                  >
                </q-item>
                <q-separator />
                <q-item>
                  <q-item-section
                    >If you want to change the color of the ground, just click
                    on it</q-item-section
                  >
                </q-item>
                <q-separator />
                <q-item>
                  <q-item-section
                    >If you want to block all the functions of the shape, select
                    the "cursor" button</q-item-section
                  >
                </q-item>
                <q-separator />
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { fabGithub } from "@quasar/extras/fontawesome-v6";

const stringOptions = [
  "quasarframework/quasar",
  "quasarframework/quasar-awesome",
];

export default {
  name: "MyLayout",
};
</script>

