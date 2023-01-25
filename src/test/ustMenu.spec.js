import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import ustMenu from '../components/ustMenu.vue'

import storeConfig from "../store";
const localVue = createLocalVue();
localVue.use(Vuex);

describe('kullanıcı girişi yapıldığında', () => {

    let wrapper;
    const mockFunction = jest.fn();
    beforeEach(() => {
        wrapper = mount(ustMenu, {
            localVue,
            data() {
                return {
                    currentUser: {
                        email: 'test@test.com',
                        password: '111222',
                    }
                };
            },

            store: new Vuex.Store({
                state: { cart: [{}, {}] },
                getters: {
                    getCartCount(state) {
                        return state.cart.length;
                    }
                }
            }),
            stubs: ['router-link']
        });
    });

    it("Çıkış Yap Butonu Gözüküyor mu?", () => {
        expect(wrapper.text()).toContain("Çıkış Yap");
    });
    it("Hesabım Butonu Gözüküyor mu?", () => {
        expect(wrapper.text()).toContain("Hesabım");
    });
});
describe('Giriş yapılmadığında', () => {
    let wrapper;
    const mockFunction = jest.fn();
    beforeEach(() => {
        wrapper = mount(ustMenu, {
            localVue,
            data() {
                return {
                    currentUser: null
                };
            },
            store: new Vuex.Store({
                state: { cart: [{}, {}] },
                getters: {
                    getCartCount(state) {
                        return state.cart.length;
                    }
                }
            }),
            stubs: ['router-link']
        });
    });

    it("Üye Ol Butonu Gözüküyor mu?", () => {
        expect(wrapper.text()).toContain("Üye Ol");
    });
    it("Üye Girişi Butonu Gözüküyor mu?", () => {
        expect(wrapper.text()).toContain("Üye Girişi");
    });
    test("Snapshot Testi", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});