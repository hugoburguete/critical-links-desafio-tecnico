import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StudentFormModal from './StudentFormModal';

describe('StudentFormModal', () => {
  test('renders the element', () => {
    render(
      <StudentFormModal
        title="create student"
        schoolClasses={[]}
        student={null}
      />,
    );
    const titleEl = screen.getByTestId('modal-title');
    expect(titleEl).toBeInTheDocument();
  });

  test('does not submit the form if the form values are not filled in', () => {
    const onSubmitStudentMock = jest.fn();
    render(
      <StudentFormModal
        title="create student"
        schoolClasses={[
          {
            _id: 'id',
            name: 'A',
            year: 1,
          },
        ]}
        student={null}
        onSubmitStudent={onSubmitStudentMock}
      />,
    );

    const submitBtn = screen.getByTestId('input-submit');
    userEvent.click(submitBtn);
    expect(onSubmitStudentMock).not.toHaveBeenCalled();

    const firstNameInput = screen.getByTestId('input-firstname');
    userEvent.type(firstNameInput, 'Test');

    userEvent.click(submitBtn);
    expect(onSubmitStudentMock).not.toHaveBeenCalled();

    const lastnameInput = screen.getByTestId('input-lastname');
    userEvent.type(lastnameInput, 'Test');

    userEvent.click(submitBtn);
    expect(onSubmitStudentMock).not.toHaveBeenCalled();

    const emailInput = screen.getByTestId('input-email');
    userEvent.type(emailInput, 'test@test.com');

    userEvent.click(submitBtn);
    expect(onSubmitStudentMock).not.toHaveBeenCalled();

    const studentNumInput = screen.getByTestId('input-student-num');
    userEvent.type(studentNumInput, '123');

    userEvent.click(submitBtn);
    expect(onSubmitStudentMock).toHaveBeenCalled();
  });

  test('submits the form with the correct values', () => {
    const onSubmitStudentMock = jest.fn();
    render(
      <StudentFormModal
        title="create student"
        schoolClasses={[
          {
            _id: 'id',
            name: 'A',
            year: 1,
          },
        ]}
        student={null}
        onSubmitStudent={onSubmitStudentMock}
      />,
    );

    const expectedValue = {
      firstname: 'Mr',
      lastname: 'Bean',
      email: 'mrbean@unitedkingdom.org',
      studentNum: 1,
      class: 'id',
    };

    const submitBtn = screen.getByTestId('input-submit');

    const firstNameInput = screen.getByTestId('input-firstname');
    userEvent.type(firstNameInput, expectedValue.firstname);

    const lastnameInput = screen.getByTestId('input-lastname');
    userEvent.type(lastnameInput, expectedValue.lastname);

    const emailInput = screen.getByTestId('input-email');
    userEvent.type(emailInput, expectedValue.email);

    const studentNumInput = screen.getByTestId('input-student-num');
    userEvent.type(studentNumInput, expectedValue.studentNum.toString());

    userEvent.click(submitBtn);
    expect(onSubmitStudentMock).toHaveBeenCalled();
    expect(onSubmitStudentMock).toHaveBeenCalledWith(expectedValue);
  });
});
