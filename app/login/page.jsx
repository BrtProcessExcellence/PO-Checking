import { redirect } from 'next/navigation';
import { auth, signIn } from '../../auth';

async function signInWithMicrosoft() {
  'use server';
  await signIn('microsoft-entra-id', { redirectTo: '/' });
}

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect('/');

  return (
    <main className="login-page">
      <section className="login-panel" aria-labelledby="login-title">
        <div className="login-mark" aria-hidden="true">PO</div>
        <p className="login-kicker">PO CHECK</p>
        <h1 id="login-title">เข้าสู่ระบบ</h1>
        <p className="login-copy">ลงชื่อเข้าใช้ด้วยบัญชี Microsoft เพื่อใช้งานระบบตรวจสอบใบนำส่ง</p>
        <form action={signInWithMicrosoft}>
          <button className="microsoft-button" type="submit">
            <span className="microsoft-icon" aria-hidden="true">
              <span /><span /><span /><span />
            </span>
            เข้าสู่ระบบด้วย Microsoft
          </button>
        </form>
        <p className="login-note">การเข้าใช้งานทุกครั้งต้องยืนยันตัวตนผ่านบัญชีองค์กร</p>
      </section>
    </main>
  );
}
