<script setup lang="ts">
import {ref} from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const website = ref('');
const isSubmitting = ref(false);
const status = ref<'idle' | 'success' | 'error'>('idle');
const feedback = ref('');

const sendMail = async () => {
    isSubmitting.value = true;
    status.value = 'idle';
    feedback.value = '';

    try {
        await $fetch('/api/contact', {
            method: 'POST',
            body: {
                name: name.value,
                email: email.value,
                message: message.value,
                website: website.value
            }
        });

        name.value = '';
        email.value = '';
        message.value = '';
        status.value = 'success';
        feedback.value = 'Mensaje enviado. Te responderemos pronto.';
    } catch {
        status.value = 'error';
        feedback.value = 'No se pudo enviar el mensaje. Inténtalo de nuevo.';
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<template>
    <section class="mailing-form" aria-labelledby="mailing-form-title">
        <h2 id="mailing-form-title">¿Hablamos?</h2>
        <form :aria-busy="isSubmitting" @submit.prevent="sendMail">
            <div class="mailing-form__field">
                <input
                    id="contact-name"
                    v-model.trim="name"
                    name="name"
                    type="text"
                    placeholder="Nombre"
                    aria-label="Nombre"
                    autocomplete="name"
                    required
                >
            </div>

            <div class="mailing-form__field">
                <input
                    id="contact-email"
                    v-model.trim="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    autocomplete="email"
                    required
                >
            </div>

            <div class="mailing-form__field mailing-form__field--wide">
                <textarea
                    id="contact-message"
                    v-model.trim="message"
                    name="message"
                    placeholder="Cuéntame tu idea"
                    aria-label="Cuéntame tu idea"
                    rows="5"
                    required
                />
            </div>

            <div class="mailing-form__honeypot" aria-hidden="true">
                <input
                    v-model="website"
                    name="website"
                    type="text"
                    tabindex="-1"
                    autocomplete="off"
                >
            </div>

            <p class="mailing-form__privacy">
                Puedes consultar nuestra política de privacidad
                <NuxtLink to="/politica-de-privacidad">aquí</NuxtLink>.
            </p>

            <button type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Enviando…' : 'Enviar mensaje' }}
            </button>

            <p
                v-if="feedback"
                class="mailing-form__feedback"
                :class="`mailing-form__feedback--${status}`"
                :role="status === 'error' ? 'alert' : 'status'"
            >
                {{ feedback }}
            </p>
        </form>
    </section>
</template>

<style scoped lang="scss">
@use "~/assets/scss/vars.scss";

.mailing-form {
    width: min(80vw, 900px);
    margin: 6vh auto;

    h2 {
        color: vars.$brand-pink;
        text-align: center;
        text-transform: uppercase;
    }

    form {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.5rem;
    }

    &__field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        &--wide {
            grid-column: 1 / -1;
        }
    }

    input,
    textarea {
        padding: 0.8rem;
        border: 1px solid rgb(190 190 190);
        border-radius: 8px;
        font: inherit;

        &:focus {
            border-color: vars.$brand-pink;
            outline: 2px solid rgb(237 95 135 / 25%);
        }

        &::placeholder {
            color: rgb(90 90 90);
            opacity: 1;
        }
    }

    textarea {
        resize: vertical;
    }

    button {
        grid-column: 1 / -1;
        justify-self: center;
        padding: 0.8rem 2.5rem;
        border: 0;
        border-radius: 10px;
        color: white;
        background-color: vars.$brand-pink;
        font: inherit;
        font-weight: 700;
        cursor: pointer;
        transition: filter 0.25s ease;

        &:hover {
            filter: brightness(75%);
        }

        &:disabled {
            opacity: 0.6;
            cursor: wait;
        }
    }

    &__honeypot {
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    &__feedback {
        grid-column: 1 / -1;
        margin: 0;
        text-align: center;

        &--success {
            color: rgb(24 120 55);
        }

        &--error {
            color: rgb(180 35 35);
        }
    }

    &__privacy {
        grid-column: 1 / -1;
        margin: 0;
        color: rgb(80 80 80);
        font-size: 0.875rem;
        line-height: 1.5;
        text-align: center;

        a {
            color: vars.$brand-pink;
            font-weight: 600;
            text-underline-offset: 0.15em;
        }
    }
}

@media (max-width: vars.$mobile-width) {
    .mailing-form {
        width: 80vw;

        form {
            grid-template-columns: 1fr;
        }

        &__field--wide,
        button,
        &__privacy,
        &__feedback {
            grid-column: 1;
        }
    }
}
</style>
