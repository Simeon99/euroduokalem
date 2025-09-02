// app/[lang]/[...rest]/page.js
import { notFound } from 'next/navigation';

export default function CatchAll() {
  notFound();
}