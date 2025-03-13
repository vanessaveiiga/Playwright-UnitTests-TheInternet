import { test, expect } from '@playwright/test';

async function alertas(page){
  await page.goto('https://the-internet.herokuapp.com/')
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible()

  await page.getByRole('link', { name: 'JavaScript Alerts' }).click()
  await expect(page.getByRole('heading', { name: 'JavaScript Alerts' })).toBeVisible()
}


test('Click for JS Alert', async ({page}) =>{
  await alertas(page)

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept();
  });
  await page.getByRole('button', { name: 'Click for JS Alert' }).click();
  await expect(page.getByText('You successfully clicked an')).toBeVisible();
})


test('Click for JS Confirm', async ({page}) =>{
  await alertas(page)

  // Clicar no OK
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });
  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
  await expect(page.getByText('You clicked: Ok')).toBeVisible();


  // Clicar no CANCELAR
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss();
  });
  await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
  await expect(page.getByText('You clicked: Cancel')).toBeVisible();
})


test('Click for JS Prompt', async ({page}) => {
  await alertas(page)
  
  // Preenchendo valores no campo
  page.once('dialog', async dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept('Oi').catch(() => {});
  });
  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
  await expect(page.getByText('You entered: Oi')).toBeVisible();

  // Campo vazio 
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });
  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
  await expect(page.getByText('You entered:')).toBeVisible();

  // Cancelar
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss();
  });
  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
  await expect(page.getByText('You entered: null')).toBeVisible();
})