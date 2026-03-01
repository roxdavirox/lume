import React, { useState } from 'react';
import clsx from 'clsx';
import { Input } from '../../../primitives/Input';
import { Button } from '../../../primitives/Button';
import * as styles from './SearchBar.css';

export interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
}

export function SearchBar({
  placeholder = 'Buscar...',
  onSearch,
  loading,
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className={clsx(styles.container, className)}>
      <Input
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      <div className={styles.actions}>
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className={styles.clearButton}
          >
            ✕
          </Button>
        )}
        <Button type="submit" variant="primary" size="sm" loading={loading}>
          🔍
        </Button>
      </div>
    </form>
  );
}
