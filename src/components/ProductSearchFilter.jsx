import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ProductSearchFilter({ searchTerm, onSearchChange, placeholder }) {
  const { t } = useTranslation();
  const defaultPlaceholder = placeholder || t('search.placeholder');

  return (
    <div className="relative max-w-xl w-full mx-auto mb-8">
      <div className="relative flex items-center">
        <span className="material-symbols-outlined absolute left-4 text-outline text-xl pointer-events-none">
          search
        </span>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={defaultPlaceholder}
          className="w-full bg-white border border-outline-variant/30 rounded-full pl-12 pr-10 py-3 text-xs font-body text-primary placeholder-outline/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all"
        />

        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 text-outline hover:text-primary transition-colors"
            title={t('search.clear')}
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        )}
      </div>
    </div>
  );
}
