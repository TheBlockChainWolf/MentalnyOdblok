import React from 'react';

export interface ModuleData {
  id: number;
  title: string;
  description: string;
  transformation: string;
  themeColor: 'brown' | 'green' | 'blue' | 'purple' | 'red';
}

export interface ProblemCardData {
  icon: React.ElementType;
  text: string;
}

export interface StatData {
  icon: React.ElementType;
  value: string;
  label: string;
}