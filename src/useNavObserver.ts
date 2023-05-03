import * as React from 'react';
import { SectionId } from './Components/Header'

export const useNavObserver = (selectors: string, handler: (section: typeof SectionId | null) => void) => {
    React.useEffect(() => {
        const headings = document.querySelectorAll(selectors);
        const headingsArray = Array.from(headings);
        const headerWrapper = document.getElementById('home');

        const observer = new IntersectionObserver(
          entries => {
              entries.forEach(entry => {
                  const currentY = entry.boundingClientRect.y;
                  const id = entry.target.getAttribute('id');
                  if (headerWrapper) {
                      const decision = {
                          aboveToc: currentY < headerWrapper.getBoundingClientRect().y,
                          belowToc: !(currentY < headerWrapper.getBoundingClientRect().y),
                          currentIndex: headingsArray.findIndex(heading => heading.getAttribute('id') === id),
                          currentRatio: entry.intersectionRatio,
                          id,
                          isIntersecting: entry.isIntersecting,
                      };
                      console.log(decision.currentIndex, decision.isIntersecting)
                      if (decision.isIntersecting) {
                          // Header at 30% from the top, update to current header
                          // @ts-ignore
                          handler(decision.id as typeof SectionId);
                      } else if (
                        !decision.isIntersecting &&
                        decision.currentRatio < 1 &&
                        decision.currentRatio > 0 &&
                        decision.belowToc
                      ) {
                          const currentVisible = headingsArray[decision.currentIndex - 1]?.getAttribute('id');
                          // @ts-ignore
                          handler(currentVisible as typeof SectionId);
                      }
                  }
              });
          },
          {
              root: null,
              rootMargin: '0px 0px -70% 0px',
              threshold: 0,
          },
        );
        headings.forEach(section => {
            observer.observe(section);
        });
        // Cleanup
        return () => {
            observer.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Dependency here is the post content.
};