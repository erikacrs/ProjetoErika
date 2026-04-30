// @ts-check
import { test, expect } from '@playwright/test';
import { login, LoginEmailInválido, ValidarTextoPrincipal, AbrirSiteQazando, ClicarNoLogin, DigitarEmail, DigitarSenha, ClicarEmLogar, ValidarSeEstouLogado } from './helpers';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('login com sucesso', async ({ page }) => {
  await login(page);
  await ValidarTextoPrincipal(page, 'Login realizado');
 });

 test('login com sucesso 2', async ({ page }) => {
  await AbrirSiteQazando(page);
  await ClicarNoLogin(page);
  await DigitarEmail(page);
  await DigitarSenha(page);
  await ClicarEmLogar(page);
  await ValidarSeEstouLogado(page);
 });

 test('login com e-mail inválido', async ({ page }) => {
    await LoginEmailInválido(page);
 });

  test('login com senha inválida', async ({ page }) => {
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill('erikacrs13@gmail.com');
  await page.locator('#password').fill('12345')
  await page.getByRole('button', { name: 'login' }).click();
 });

  test('login com e-mail e senha vazio teste1234', async ({ page }) => {
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill('');
  await page.locator('#password').fill('');
  await page.getByRole('button', { name: 'login' }).click();
 });