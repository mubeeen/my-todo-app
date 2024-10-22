import React from 'react';
import Todo from "./todos/page";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Home - Todo',
  description: 'Todo main page todo application',
};

export default function LandingPage(): React.JSX.Element {
  return <Todo />;
}


