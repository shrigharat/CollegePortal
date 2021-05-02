import styled from "styled-components";

export const Subtitle = styled.span`
  color: #575252;
  font-size: 0.9rem;
  cursor: pointer;
  width: max-content;
`;

export const ClassStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;

  .class-header {
    background: white;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    filter: drop-shadow(0 0 4px rgba(72, 72, 72, 0.25));
    border-radius: 0.5rem;
    padding: 1.5rem 1rem;

    .class-info {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 0.3rem;

      .class-name {
        font-weight: 600;
        font-size: 1.1rem;
      }
    }

    .class-nav {
      display: flex;
      gap: 0.8rem;
      width: max-content;

      .link {
        padding: 0.3rem 0.5rem;
        border-radius: 0.4rem;
        cursor: pointer;
        transition: background-color 0.2s ease;
        font-size: 0.9rem;

        &:hover {
          background-color: rgba(72, 72, 72, 0.25);
        }
      }

      .active-link {
        background-color: #4444aa;
        color: white;

        &:hover {
          background-color: #4444aa;
          color: white;
        }
      }
    }
  }

  .add-btn {
    position: fixed;
    cursor: pointer;
    outline: none;
    right: 1rem;
    bottom: 0.5rem;
    padding: 0.3rem;
    border: 2px solid white;
    border-radius: 50%;
    background-color: #4445aa;
    color: white;
    z-index: 10;
    box-shadow: 0 0 4px 4px rgba(72, 72, 72, 0.25);

    &:active {
      animation: spin 0.2s ease forwards;
    }
  }

  .class-body {
    margin-top: 1.5rem;
    padding-bottom: 1.5rem;
    overflow-x: hidden;

    .coursework-list,
    .resources-list {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }

  @media screen and (max-width: 850px) {
    .class-header {
      flex-direction: column;
    }
  }

  @keyframes slide-left {
    from {
      transform: translateX(10%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;
