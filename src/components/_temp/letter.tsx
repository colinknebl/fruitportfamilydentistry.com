import React from 'react';
import styled from 'styled-components';

import { Letterhead } from '../client/Letterhead';
import { StyledPaper } from '../letter';

export function Letter() {
    return (
        <StyledLetter>
            <Letterhead date="May 22, 2020" />
            <p>Dear Patients,</p>
            <p>
                We hope this letter finds you and your family in good health.
                Our lives have been altered over the last few months, and all of
                us are looking forward to resuming a sense of “normalcy”. While
                many things have changed, one thing has remained the same: our
                commitment to your safety.
            </p>
            <p>
                Infection control has always been a top priority in our
                practice, and you may have seen this during your visits to our
                office. Our infection control processes are made so that when
                you receive care, it’s both safe and comfortable. Our office
                adheres to infection control recommendations made by the
                American Dental Association (ADA) and the U.S. Centers for
                Disease Control and Prevention (CDC) and the Occupational Safety
                and Health Administration (OSHA). We will monitor the activities
                of these agencies so that we are up to date on any new rulings
                or guidance that may be issued. We do this to make sure that our
                infection control procedures are current and adhere to each
                agencies’ recommendations.
            </p>
            <p>
                You may see some changes when it comes time for your
                appointment, in accordance with new recommendations and
                regulations. We made these changes to help protect our patients
                and staff. For example:
            </p>
            <ul>
                <li>
                    In accordance with the guidance from the American Dental
                    Association, our office will communicate with you before
                    your appointment to ask some screening questions and you
                    will be asked those same questions a second time when you
                    are in the office. You will have your temperature and/or
                    oxygen saturation measured upon your arrival to the office
                    before you are allowed to enter or receive treatment. You
                    may be asked to reschedule your appointment if you have a
                    fever or are experiencing symptoms of COVID-19.
                </li>
                <li>
                    In accordance with the State of Michigan Emergency Order
                    2020-97, you must wear a facemask upon entering the office.
                </li>
                <li>
                    We will have you use hand sanitizer or wear disposable
                    gloves when you enter the office.
                </li>
                <li>
                    You may see that our reception area no longer offers
                    magazines or children’s toys and books since these items are
                    difficult to clean and disinfect. In order to practice
                    social distancing, there will be limited seating available
                    in the waiting room. You may also be asked to wait in your
                    vehicle, if able, until we are ready to bring you into the
                    treatment area.
                </li>
                <li>
                    Appointments will be managed to allow for social distancing
                    between patients. That might mean that you’re offered fewer
                    options for scheduling your appointments.
                </li>
                <li>
                    We will do our best to allow greater time between patients
                    to reduce waiting times for you as well as to reduce the
                    number of patients in the reception area at any one time.
                </li>
                <li>
                    We will be regularly disinfecting common surfaces to avoid
                    any risk of cross contamination.
                </li>
            </ul>

            <p>
                Our office has had to make many other changes as well. These
                will affect you and your loved ones, but these changes are
                necessary for the health and safety of our patients and staff.
                These are some of the changes being made:
            </p>
            <ul>
                <li>
                    Each dentist and staff member will be screened twice daily
                    for any symptoms.
                </li>
                <li>
                    Staff will be wearing additional personal protective
                    equipment, some of which may make communication more of a
                    challenge. However, we pledge to do our best to answer all
                    of your questions during your appointment and communicate as
                    clearly as possible.
                </li>
                <li>
                    At this time, only the patient receiving treatment will be
                    allowed in the treatment rooms. That means parents and
                    caregivers will not be allowed to accompany their loved ones
                    during dental treatment. Only translators and service
                    animals are allowed to accompany a patient at this time.
                    Please understand that dentistry involves creating an
                    aerosol and this puts everyone in the immediate area at risk
                    without proper protection equipment, so no exceptions will
                    be made. If a parent, guardian, or caretaker must accompany
                    the patient and would like to wait in the waiting room
                    during treatment, they must also be screened before being
                    able to enter the office.
                </li>
                <li>
                    Currently, and for the foreseeable future, we are unable to
                    offer nitrous oxide sedation.
                </li>
                <li>
                    Please know that while we will be as personable as we can,
                    we will not be shaking hands or extending hugs at this time.
                    You will be greeted with a smile from under our masks, and
                    know that these measures are simply for your safety.
                </li>
            </ul>
            <p>
                Please know that in order to accommodate and adhere to all of
                the changes required for patient safety there may be longer wait
                times. We will do our absolute best to stay on schedule as much
                as possible and appreciate your understanding.
            </p>
            <p>
                Lastly, and in full transparency, the added requirements of
                training, personal protective equipment (PPE), and office
                equipment installation necessary to keep our patients and staff
                safe is very expensive. We pride ourselves on keeping our fees
                fair, and are not looking to make a profit off of our additional
                expenses, but in reality the added cost of this equipment cannot
                be absorbed in our existing fees. For the foreseeable future,
                you will see that we are billing separately for this additional
                equipment.
            </p>
            <p>
                At this time, our office is still closed and we have not been
                given a date when dentistry can resume. Dental offices are
                mandated to be closed by the government. As soon as we know the
                date that we can re-open, we will be calling patients to start
                rescheduling appointments.
            </p>
            <p>
                We look forward to seeing you again and are happy to answer any
                questions you may have about the steps we take to keep you, and
                every patient, safe in our practice. To make an appointment,
                please call our office at 616-844-4400.
            </p>
            <p>
                Thank you for being our patient. We value your trust and loyalty
                and look forward to welcoming you back.
            </p>
            <footer>
                <p>
                    <span>Sincerely,</span>
                    <span className="doc-name">
                        Peter D. Rick, D.D.S., P.C.
                    </span>
                    <span className="doc-name">
                        Chelsea L. Klipfel, D.D.S., P.L.L.C.
                    </span>
                    <span className="doc-name">Peter D. Rick, Jr., D.D.S.</span>
                </p>
            </footer>
        </StyledLetter>
    );
}

const StyledLetter = styled(StyledPaper)``;
