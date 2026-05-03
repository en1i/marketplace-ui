'use client'

import {
  CaretDownIcon,
  CaretRightIcon,
  ListIcon,
  XIcon,
} from '@phosphor-icons/react/dist/ssr'
import { useEffect, useRef, useState } from 'react'
import { categories } from '@/lib/categories'

export function CategoriesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDesktop, setActiveDesktop] = useState<string>(
    categories[0].label,
  )
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false)
        setExpandedMobile(null)
      }
    }
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
        setExpandedMobile(null)
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', onKey)
      document.addEventListener('mousedown', onOutside)
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onOutside)
    }
  }, [isOpen])

  function close() {
    setIsOpen(false)
    setExpandedMobile(null)
  }

  function toggle() {
    if (!isOpen) setActiveDesktop(categories[0].label)
    setIsOpen((v) => !v)
  }

  const activeCat = categories.find((c) => c.label === activeDesktop)

  return (
    <div data-test-id="ui_categories-dropdown" ref={ref} className="relative">
      {/* Mobile trigger */}
      <button
        type="button"
        onClick={toggle}
        aria-label="Open categories"
        aria-expanded={isOpen}
        className="flex items-center justify-center md:hidden text-ink cursor-pointer"
      >
        <ListIcon size={24} weight="bold" />
      </button>

      {/* Desktop trigger */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        className="hidden md:flex items-center gap-1.5 text-body-md text-muted cursor-pointer shrink-0"
      >
        <ListIcon size={20} weight="bold" />
        Categories
      </button>

      {isOpen && (
        <>
          {/* ── Desktop dropdown ── */}
          <div
            className="hidden md:flex absolute left-0 top-[calc(100%+10px)] z-50 rounded-md shadow-lg border border-[var(--color-border-warm)] bg-surface overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 80px)' }}
          >
            {/* Category list */}
            <ul className="w-56 overflow-y-auto py-1 shrink-0">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveDesktop(cat.label)}
                    onClick={() => setActiveDesktop(cat.label)}
                    className={`flex items-center gap-3 w-full px-4 py-2.5 text-left cursor-pointer transition-colors duration-100 ${
                      activeDesktop === cat.label
                        ? 'bg-soft text-ink'
                        : 'text-muted hover:bg-soft hover:text-ink'
                    }`}
                  >
                    <cat.Icon
                      size={18}
                      weight="regular"
                      color={
                        activeDesktop === cat.label
                          ? 'var(--color-text-primary)'
                          : 'var(--color-text-muted)'
                      }
                    />
                    <span className="flex-1 text-body-md">{cat.label}</span>
                    {cat.subcategories && cat.subcategories.length > 0 && (
                      <CaretRightIcon
                        size={13}
                        color="var(--color-text-soft)"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Sub-categories panel */}
            {activeCat?.subcategories && activeCat.subcategories.length > 0 && (
              <div className="w-60 border-l border-[var(--color-border-warm)] py-1 overflow-y-auto shrink-0">
                <p className="text-heading-sm text-ink px-4 py-2.5">
                  {activeCat.label}
                </p>
                <ul className="flex flex-col">
                  {activeCat.subcategories.map((sub) => (
                    <li key={sub}>
                      <a
                        href="/"
                        className="block px-4 py-2.5 text-body-md text-muted hover:bg-soft hover:text-ink"
                      >
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ── Mobile overlay ── */}
          <div className="md:hidden fixed inset-0 z-50 bg-surface overflow-y-auto">
            {/* Sticky header */}
            <div className="sticky top-0 flex items-center justify-between px-4 py-4 border-b border-[var(--color-border-warm)] bg-surface z-10">
              <span className="text-heading-sm text-ink">Categories</span>
              <button
                type="button"
                onClick={close}
                aria-label="Close categories"
                className="flex items-center justify-center text-ink cursor-pointer"
              >
                <XIcon size={22} />
              </button>
            </div>

            {/* Category list */}
            <ul>
              {categories.map((cat) => {
                const hasSubs =
                  cat.subcategories && cat.subcategories.length > 0
                const expanded = expandedMobile === cat.label
                return (
                  <li key={cat.label}>
                    <button
                      type="button"
                      onClick={() =>
                        hasSubs
                          ? setExpandedMobile(expanded ? null : cat.label)
                          : close()
                      }
                      className={`flex items-center gap-3 w-full px-4 py-3.5 text-left border-b border-[var(--color-border-warm)] cursor-pointer ${
                        expanded ? 'bg-soft' : ''
                      }`}
                    >
                      <cat.Icon
                        size={20}
                        weight="regular"
                        color="var(--color-text-primary)"
                      />
                      <span className="flex-1 text-body-md text-ink">
                        {cat.label}
                      </span>
                      {hasSubs &&
                        (expanded ? (
                          <CaretDownIcon
                            size={16}
                            color="var(--color-text-soft)"
                          />
                        ) : (
                          <CaretRightIcon
                            size={16}
                            color="var(--color-text-soft)"
                          />
                        ))}
                    </button>

                    {expanded && hasSubs && (
                      <ul className="bg-soft border-b border-[var(--color-border-warm)]">
                        {cat.subcategories?.map((sub) => (
                          <li key={sub}>
                            <a
                              href="/"
                              className="flex items-center px-12 py-3 text-body-md text-muted hover:bg-soft hover:text-ink border-b border-[var(--color-border-subtle)] last:border-0"
                            >
                              {sub}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}
