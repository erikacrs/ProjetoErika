import { test, expect } from '@playwright/test';

export async function login(page) {
  await page.goto('https://automationpratice.com.br');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill('erikacrs13@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
}
export async function ValidarTextoPrincipal(page, texto) {
   await expect(page.getByRole('heading', { name: texto })).toBeVisible();
}
export async function LoginEmailInválido(page) {
  await page.goto('https://automationpratice.com.br');  
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill('teste.teste');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
}
export async function AbrirSiteQazando(page) {
    await page.goto('https://automationpratice.com.br');
}
export async function ClicarNoLogin(page) {
    await page.getByRole('link', { name: ' Login' }).click();
}
export async function DigitarEmail(page) {
    await page.locator('#user').fill('erikacrs13@gmail.com');
}
export async function DigitarSenha(page) {
    await page.locator('#password').fill('123456');
}
export async function ClicarEmLogar(page) {
    await page.getByRole('button', { name: 'login' }).click();
}
export async function ValidarSeEstouLogado(page) {
    await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
}